// src/pages/AdminPanel.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [showSuccess, setShowSuccess] = useState(false);

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === "cowboy9834" && password === "cowboy_uz") {
      setIsAuthenticated(true);
      navigate("/admin");
    } else {
      alert("Login yoki parol noto'g'ri!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLogin("");
    setPassword("");
    navigate("/");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      id: Date.now(),
      title: form.title.value,
      price: form.price.value,
      image: form.image.value,
      description: form.description.value,
    };
    setProducts([...products, newProduct]);
    form.reset();
    setActiveTab("products");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDelete = (id) => {
    if (window.confirm("Haqiqatan ham ushbu mahsulotni o'chirmoqchimisiz?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    const newTitle = prompt("Mahsulot nomi:", product.title);
    const newPrice = prompt("Mahsulot narxi:", product.price);
    const newImage = prompt("Mahsulot rasmi URL:", product.image);
    const newDesc = prompt("Mahsulot tavsifi:", product.description);
    
    if (newTitle && newPrice && newImage && newDesc) {
      setProducts(
        products.map((p) =>
          p.id === product.id 
            ? { 
                ...p, 
                title: newTitle,
                price: newPrice,
                image: newImage,
                description: newDesc
              } 
            : p
        )
      );
    }
  };


  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Panel</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Chiqish
        </button>
      </div>

      {showSuccess && (
        <div className="alert alert-success">
          Mahsulot muvaffaqiyatli qo'shildi!
        </div>
      )}

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Mahsulotlar
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            Mahsulot Qo'shish
          </button>
        </li>
      </ul>

      {activeTab === 'add' ? (
        <div className="card shadow mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Yangi Mahsulot</h4>
            <form onSubmit={handleAddProduct}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Mahsulot nomi</label>
                  <input 
                    name="title" 
                    className="form-control" 
                    placeholder="Mahsulot nomi" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Narxi</label>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    placeholder="Narxi"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Rasm URL</label>
                  <input
                    name="image"
                    type="url"
                    className="form-control"
                    placeholder="Rasm URL"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Tavsif</label>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Tavsif"
                    rows="3"
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-success w-100" type="submit">
                    Qo'shish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="row">
          {products.length === 0 ? (
            <div className="col-12 text-center py-5">
              <h4>Mahsulotlar topilmadi</h4>
              <button 
                className="btn btn-dark mt-3"
                onClick={() => setActiveTab('add')}
              >
                Birinchi mahsulotingizni qo'shing
              </button>
            </div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <img 
                    src={product.image} 
                    className="card-img-top p-3" 
                    height="250" 
                    style={{objectFit: 'contain'}}
                    alt={product.title} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">
                      {product.description.length > 100 
                        ? `${product.description.substring(0, 100)}...` 
                        : product.description}
                    </p>
                    <p className="lead fw-bold">${product.price}</p>
                  </div>
                  <div className="card-footer bg-white">
                    <div className="d-flex justify-content-between">
                      <button 
                        onClick={() => handleEdit(product)} 
                        className="btn btn-outline-warning"
                      >
                        Tahrirlash
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)} 
                        className="btn btn-outline-danger"
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;