// import React, { useState } from 'react';
// import { Container, Card, Col, Button } from 'react-bootstrap';

// const ProductComponent = (props) => {
//     const product = props.datas;

//     // State to manage the count for each item (assume products is an array of items)
//     const [counts, setCounts] = useState(Array(props.datas.length).fill(0));

//     const increment = (index, product) => {
//         const newCounts = [...counts];
//         newCounts[index]++;
//         setCounts(newCounts);

//         // Retrieve existing cart from local storage
//         const ourData = JSON.parse(localStorage.getItem('items')) || [];

//         // Check if the product is already in the cart
//         const existingProductIndex = ourData.findIndex(item => item.id === product.id);

//         if (existingProductIndex > -1) {
//             // If the product exists, update the count
//             ourData[existingProductIndex].count += 1;
//         } else {
//             // If the product does not exist, add it to the cart with count set to 1
//             ourData.push({ id: product.id, name: product.name, count: 1 });
//         }

//         // Save the updated cart back to local storage
//         localStorage.setItem('items', JSON.stringify(ourData));
//     };

//     const decrement = (index, product) => {
//         const newCounts = [...counts];
        
//         // Ensure the count doesn't go below 0
//         if (newCounts[index] > 0) {
//             newCounts[index]--;
//             setCounts(newCounts);

//             // Retrieve existing cart from local storage
//             const ourData = JSON.parse(localStorage.getItem('items')) || [];

//             // Check if the product is already in the cart
//             const existingProductIndex = ourData.findIndex(item => item.id === product.id);

//             if (existingProductIndex > -1) {
//                 // If the product exists and its count is more than 0, decrease the count
//                 ourData[existingProductIndex].count -= 1;

//                 // If count reaches 0, remove the product from the cart
//                 if (ourData[existingProductIndex].count === 0) {
//                     ourData.splice(existingProductIndex, 1);
//                 }

//                 // Save the updated cart back to local storage
//                 localStorage.setItem('items', JSON.stringify(ourData));
//             }
//         }
//     };

//     const addProductToCart = (index, product) => {
//         const newCounts = [...counts];
//         newCounts[index] = 1;  // Add the product and set its count to 1
//         setCounts(newCounts);

//         // Add product to local storage
//         const ourData = JSON.parse(localStorage.getItem('items')) || [];
//         ourData.push({ id: product.id, name: product.name, count: 1 });
//         localStorage.setItem('items', JSON.stringify(ourData));
//     };

//     return (
//         <>
//         <Container>
//             {props.datas.map((product, index) => (
//                 <Card className="food-card py-4" key={product.id}>
//                     <div className="card-content d-flex justify-content-between align-items-center">
//                         <Col xs={6} className="text-section ps-4">
//                             <Card.Title>{product.name}</Card.Title>
//                             <Card.Text>${product.price}</Card.Text>
//                             <Card.Text>{product.id}</Card.Text>
//                         </Col>
//                         <Col xs={6} className="text-center">
//                             <Card.Img variant="top" src="./assets/Cafe2images/Beverages/milkshake.jpg" alt={product.name} className="food-image img-fluid pe-4" style={{ width: "200px" }} />
//                             <div className="button-section mt-2">
//                                 {counts[index] === 0 ? (
//                                     <Button className="add-button me-3" onClick={() => addProductToCart(index, product)}>Add</Button>
//                                 ) : (
//                                     <div className="d-flex align-items-center justify-content-center">
//                                         <Button className="ms-2" onClick={() => decrement(index, product)}>-</Button>
//                                         <span>{counts[index]}</span>
//                                         <Button className="ms-2" onClick={() => increment(index, product)}>+</Button>
//                                     </div>
//                                 )}
//                             </div>
//                         </Col>
//                     </div>
//                 </Card>
//             ))}
//         </Container>
//         </> 
//     );
// };

// export default ProductComponent;



































// import React, {  useState } from 'react';
// import { Container, Col, Card, Button,  } from 'react-bootstrap';
// import './Menucards.css';
// import products from './Product';



// function CardCustom(props) {
//     console.log(props)
//     var product = props.datas
//   // State to manage the count for the item
//   const [counts, setCounts] = useState(0);
// //   const [counts, setCounts] = useState(Array(products.length).fill(0));

//   const increment = (index, product) => {
//     const newCounts = [...counts];
//     newCounts[index]++;
//     setCounts(newCounts);

//     // Retrieve existing cart from local storage
//     const ourData = JSON.parse(localStorage.getItem('items')) || [];

//     const existingCart = JSON.stringify(ourData)

//     console.log(existingCart);

//     // Ensure existingCart is an array
//     if (!Array.isArray(existingCart)) {
//         console.error("Existing cart is not an array", existingCart);
//         return;
//     }

//     // Check if the product is already in the cart
//     const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

//     if (existingProductIndex > -1) {
//         // If the product exists, update the count
//         existingCart[existingProductIndex].count += 1; // Increment the count
//     } else {
//         // If the product does not exist, add it to the cart with count set to 1
//         existingCart.push({ id: product.id, name: product.name, count: 1 });
//     }

//     // Save the updated cart back to local storage
//     localStorage.setItem('items', JSON.stringify(existingCart));
// };

// const decrement = (index, product) => {
//     const newCounts = [...counts];
    
//     // Ensure the count doesn't go below 0
//     if (newCounts[index] > 0) {
//         newCounts[index]--;
//         setCounts(newCounts);

//         // Retrieve existing cart from local storage
//         const ourData = JSON.parse(localStorage.getItem('items')) || [];

//         const existingCart = JSON.stringify(ourData);

//         console.log(existingCart);

//         // Ensure existingCart is an array
//         if (!Array.isArray(existingCart)) {
//             console.error("Existing cart is not an array", existingCart);
//             return;
//         }

//         // Check if the product is already in the cart
//         const existingProductIndex = existingCart.findIndex(item => item.id === product.id);

//         if (existingProductIndex > -1) {
//             // If the product exists and its count is more than 0, decrease the count
//             existingCart[existingProductIndex].count -= 1;

//             // If count reaches 0, remove the product from the cart
//             if (existingCart[existingProductIndex].count === 0) {
//                 existingCart.splice(existingProductIndex, 1);
//             }

//             // Save the updated cart back to local storage
//             localStorage.setItem('items', JSON.stringify(existingCart));
//         }
//     }
// };

//   const someFn = () => {
//     console.log("This is text")
//     console.log(product);
//     localStorage.setItem(product.name, JSON.stringify(product));
//   }



//   return (
//     <>
   
//       <Container>
        
//                 <Card className="food-card py-4" key={product.id}>
//                   <div className="card-content d-flex justify-content-between align-items-center">
//                     <Col xs={6} className="text-section ps-4">
//                       <Card.Title>{product.name}</Card.Title>
//                       <Card.Text>${product.price}</Card.Text>
//                       <Card.Text>{product.id}</Card.Text>
//                     </Col>
//                     <Col xs={6} className="text-center">
//                       <Card.Img variant="top" src="./assets/Cafe2images/Beverages/milkshake.jpg" alt={product.name} className="food-image img-fluid pe-4" style={{ width: "200px" }} />
//                       <div className="button-section mt-2">
//                         {counts === 0 ? (
//                           <Button className="add-button me-3" onClick={someFn}>Add</Button>
//                         ) : (
//                           <div className="d-flex align-items-center justify-content-center">
//                             <Button  className="ms-2" onClick={decrement}>-</Button>
//                             <span>{counts}</span>
//                             <Button  className="ms-2" onClick={increment}>+</Button>
//                           </div>
//                         )}
//                       </div>
//                     </Col>
//                   </div>
//                 </Card>
//       </Container>
//     </>
//   );
// }

// export default CardCustom;