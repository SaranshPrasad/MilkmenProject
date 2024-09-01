
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const pool = require('./db');
const cors = require('cors');

const app = express();
const PORT = 5000;

const SECRET_KEY = 'your_secret_key'; 
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
};

app.use(cors({
    origin: 'http://localhost:1234', // Adjust to your frontend’s origin
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Add Authorization header
}));

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'User already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );

        const token = jwt.sign({ id: newUser.rows[0].id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ success: true, message: 'User registered successfully!', token, user:newUser, username:newUser.rows[0].username , user_id:newUser.rows[0].user_id});
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.post('/vendor-signup', async (req, res) => {
    const { name, email, password, address, number } = req.body;

    try {
        const vendor = await pool.query('SELECT * FROM vendor WHERE v_email = $1', [email]);

        if (vendor.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'Vendor already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = await pool.query(
            'INSERT INTO vendor (v_name, v_email, v_password, v_number, v_address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, hashedPassword, number, address]
        );

        const token = jwt.sign({ id: newVendor.rows[0].id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ success: true, message: 'Vendor registered successfully!', token, vendor: newVendor });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required.' });
        }

        
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        const existingUser = user.rows[0];

        const isMatch = await bcrypt.compare(password, existingUser.password_hash);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: existingUser.user_id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ success: true, message: 'Login successful!', user: existingUser, userId: existingUser.user_id, token });
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.get('/vendors', async (req, res) => {
    try {
        const vendors = await pool.query('SELECT * FROM vendor');
        res.status(200).json(vendors.rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});
app.get('/users', async (req, res) => {
    try{
        const users = await pool.query('SELECT * FROM users');
        res.status(200).json(users.rows);
    }catch(err){
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
})
app.post('/vendorlogin', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required.' });
        }

        
        const vendor = await pool.query('SELECT * FROM vendor WHERE v_email = $1', [email]);

        if (vendor.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        const existingVendor = vendor.rows[0];

        const isMatch = await bcrypt.compare(password, existingVendor.v_password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: existingVendor.v_id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'Login successful!', vendor: existingVendor, v_name: existingVendor.v_name, v_id:existingVendor.v_id, token});
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Count total users
app.get('/admin/total-users', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM users');
        const totalUsers = result.rows[0].count;
        res.status(200).json({ totalUsers });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});


app.get('/admin/total-vendors', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM vendor'); 
        const totalVendors = result.rows[0].count;
        res.status(200).json({ totalVendors });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.post('/vendor/add-product', authenticateToken, async (req, res) => {
    const { name, description, price, vendor_id } = req.body;

    if (!vendor_id) {
        return res.status(400).json({ success: false, message: 'Vendor ID is required.' });
    }

    try {
        const newProduct = await pool.query(
            'INSERT INTO products (vendor_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *',
            [vendor_id, name, description, price]
        );
        res.status(201).json({ success: true, product: newProduct.rows[0] });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});


app.post('/vendor/products', authenticateToken, async (req, res) => {
    const { vendor_id } = req.body;

    if (!vendor_id) {
        return res.status(400).json({ success: false, message: 'Vendor ID is required.' });
    }

    try {
        const result = await pool.query('SELECT * FROM products WHERE vendor_id = $1', [vendor_id]);
        res.status(200).json({ success: true, products: result.rows });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});


app.put('/vendor/update-product/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const vendor_id = req.user.id;

    try {
        const result = await pool.query(
            'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 AND vendor_id = $5 RETURNING *',
            [name, description, price, id, vendor_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: 'Product not found or not authorized.' });
        }

        res.status(200).json({ success: true, product: result.rows[0] });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});
app.delete('/vendor/delete-product/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const vendor_id = req.user.id;

    try {
        const result = await pool.query(
            'DELETE FROM products WHERE id = $1 AND vendor_id = $2 RETURNING *',
            [id, vendor_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: 'Product not found or not authorized.' });
        }

        res.status(200).json({ success: true, message: 'Product deleted successfully.' });
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.get('/vendors/:id', async (req, res) => {
    const vendorId = req.params.id;
    try {
        // Fetch vendor details
        const vendorResult = await pool.query('SELECT * FROM vendor WHERE v_id = $1', [vendorId]);
        const vendor = vendorResult.rows[0];

        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        // Fetch products associated with the vendor
        const productsResult = await pool.query('SELECT * FROM products WHERE vendor_id = $1', [vendorId]);

        // Combine vendor details with their products
        const vendorDetails = {
            ...vendor,
            products: productsResult.rows,
        };

        res.json(vendorDetails);
    } catch (error) {
        console.error('Error fetching vendor details:', error);
        res.status(500).send('Server error');
    }
});

app.get('/vendors/:vendorId/products', async (req, res) => {
    const vendorId = req.params.vendorId;

    try {
        // Query to fetch products for the specified vendorId
        const productsResult = await pool.query('SELECT * FROM products WHERE vendor_id = $1', [vendorId]);

        // Check if products were found
        if (productsResult.rows.length === 0) {
            return res.status(404).json({ message: 'No products found for this vendor' });
        }

        // Return the products as JSON
        res.json(productsResult.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Server error');
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
