const jwt = require('jsonwebtoken');

const auth = (req ,res)=>{
    const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    res.json(token)
};

const checkJwt2 = (tokentocheck) => {
    const decoded = jwt.verify(tokentocheck, 'shhhhh'); 
    console.log(decoded)  
};
checkJwt2("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NDc0Mjg3NjB9.2L4ci7taF0w-tQ2kHhc25q6zBNGRe28QPYUyES1vohw");

module.exports = auth