import mysql from 'mysql';

// Kết nối đến CSDL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root', 
    password: '', 
    database: 'quanly' 
  });
  
// Kết nối đến CSDL
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối:', err);
  } else {
    console.log('Đã kết nối thành công đến CSDL');
  }
});

// Đóng kết nối sau khi hoàn thành
connection.end();