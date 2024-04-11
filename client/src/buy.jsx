import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css'; // Import your CSS file
import razorpayImage from './img/razorpay.jpg'; // Import the Razorpay downloaded image
import jsPDF from 'jspdf'; // Import jsPDF library

const Buy = () => {
  const [amount, setAmount] = useState('');
  const location = useLocation();
  const { project } = location.state;

  const generateDocument = () => {
    let documentContent = '';
  
    // Differentiate source code content based on the project
    if (project.id === 1) {
      // Source code for project 1 (Image Recognition System using ML)
      documentContent = `// Source code for project: ${project.title}\n\nimport tensorflow as tf;
        from tensorflow import keras;
        from tensorflow.keras import layers;
        
        # Load the dataset (example: MNIST)
        mnist = keras.datasets.mnist;
        (train_images, train_labels), (test_images, test_labels) = mnist.load_data();
        
        # Preprocess the data
        train_images = train_images / 255.0;
        test_images = test_images / 255.0;
        
        # Define the model
        model = keras.Sequential([
            layers.Flatten(input_shape=(28, 28)),
            layers.Dense(128, activation='relu'),
            layers.Dense(10)
        ]);
        
        # Compile the model
        model.compile(optimizer='adam',
                      loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                      metrics=['accuracy']);
        
        # Train the model
        model.fit(train_images, train_labels, epochs=10);
        
        # Evaluate the model
        test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=2);
        print('\nTest accuracy:', test_acc);
        
        # Save the model
        model.save('image_recognition_model');
        `;
    } else if (project.id === 2) {
      // Source code for project 2 (Fresh Food Web App)
      documentContent = `// Source code for project: ${project.title}\n\n<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fresh Food Delivery</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
        
                header, footer {
                    background-color: #4CAF50;
                    color: white;
                    text-align: center;
                    padding: 1rem 0;
                }
        
                main {
                    display: flex;
                    justify-content: space-around;
                    padding: 2rem 0;
                }
        
                section {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 1rem;
                    flex: 1;
                }
        
                ul {
                    list-style-type: none;
                    padding: 0;
                }
        
                li {
                    margin-bottom: 0.5rem;
                }
        
                button {
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                }
        
                button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Fresh Food Delivery</h1>
            </header>
            <main>
                <section id="menu">
                    <h2>Menu</h2>
                    <ul id="menu-list"></ul>
                </section>
                <section id="cart">
                    <h2>Cart</h2>
                    <ul id="cart-items"></ul>
                    <button id="checkout-btn">Checkout</button>
                </section>
            </main>
            <footer>
                <p>Contact us at <a href="mailto:info@freshfood.com">info@freshfood.com</a></p>
            </footer>
            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const menuList = document.getElementById('menu-list');
                    const cartItems = document.getElementById('cart-items');
                    const checkoutBtn = document.getElementById('checkout-btn');
        
                    const menuItems = [
                        { id: 1, name: 'Salad', price: 8.99 },
                        { id: 2, name: 'Sandwich', price: 6.99 },
                        { id: 3, name: 'Soup', price: 5.99 }
                    ];
        
                    // Display menu items
                    menuItems.forEach(item => {
                        const menuItem = document.createElement('li');
                        menuItem.innerHTML = ``; // Add missing semicolon here
                        menuItem.addEventListener('click', () => addToCart(item));
                        menuList.appendChild(menuItem);
                    });
        
                    const cart = [];
        
                    // Add item to cart
                    function addToCart(item) {
                        cart.push(item);
                        renderCart();
                    }
        
                    // Render cart items
                    function renderCart() {
                        cartItems.innerHTML = '';
                        cart.forEach(item => {
                            const cartItem = document.createElement('li');
                            cartItem.innerHTML = ;
                            cartItems.appendChild(cartItem);
                        });
                    }
        
                    // Checkout
                    checkoutBtn.addEventListener('click', () => {
                        const total = cart.reduce((acc, item) => acc + item.price, 0);
                        alert(``);
                    });
                });
            </script>
        </body>
        </html>
        `;
    } else if (project.id === 3) {
      documentContent = `// Source code for project: ${project.title}\n\nimport numpy as np
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.feature_extraction.text import CountVectorizer
      from sklearn.naive_bayes import MultinomialNB
      from sklearn.metrics import accuracy_score
      
      # Load dataset
      data = pd.read_csv('spam.csv', encoding='latin-1')
      
      # Split dataset into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(data['text'], data['class'], test_size=0.2, random_state=42)
      
      # Vectorize the text data
      vectorizer = CountVectorizer()
      X_train_vec = vectorizer.fit_transform(X_train)
      X_test_vec = vectorizer.transform(X_test)
      
      # Train the classifier
      classifier = MultinomialNB()
      classifier.fit(X_train_vec, y_train)
      
      # Predict on the test set
      y_pred = classifier.predict(X_test_vec)
      
      # Calculate accuracy
      accuracy = accuracy_score(y_test, y_pred)
      print('Accuracy:', accuracy)
      `;
    }
  
    // Create new instance of jsPDF
    const pdf = new jsPDF();
    
    // Add content to the PDF
    pdf.text(documentContent, 10, 10);
  
    // Save the PDF
    pdf.save(`${project.title}_source_code.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finalAmount = parseFloat(amount);
    if (isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please Enter a Valid Amount");
    } else {
      // Convert amount to paise (1 Rupee = 100 paise)
      finalAmount = finalAmount * 100; // Convert to paise
      // Calculate final amount with 10% charge
      finalAmount = finalAmount * 1.10; // Adding 10% charge
      finalAmount=Math.round((finalAmount + Number.EPSILON) * 100) / 100
      alert(`Final Amount: ${finalAmount / 100} INR`); // Convert back to Rupees for display
  
      var options = {
        key: "rzp_test_QM6YdnGYkwCaVd",
        key_secret: "Nr71Rm0FcxvJ6Z7wCWo6XVQs",
        amount: finalAmount,
        currency: "INR",
        name: "InnoTradeHUB",
        description: "for payments",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          generateDocument(); // Call the function to generate and download the PDF document upon successful payment
        },
        prefill: {
          name: "Prem",
          email: "amprem8@gmail.com",
          contact: "9345771470"
        },
        notes: {
          address: "Razorpay"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  


  return (
    <div className='payment-container' style={{ 
      backgroundImage: `url(${razorpayImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'fixed', // Set background attachment to fixed
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}> 
      <h2 style={{ color: 'white' }}>Payment</h2> {/* Change heading color to white */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder='Enter Amount' 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ marginBottom: '10px' }} 
        /> {/* Set default value as project price */}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3399cc', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default Buy;
