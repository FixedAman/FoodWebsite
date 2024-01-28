const user = { 
    name : "Vinsomoke Sanji" ,
    imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmyanimelist.net%2Ffeatured%2F1976%2FVinsmoke_Sanji_%257C_One_Piece_%257C_Full_Character_Profile&psig=AOvVaw1F1GlN3o9zIGmPx1dP9Xuu&ust=1705680333901000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjI4sao54MDFQAAAAAdAAAAABAD ",
    imageSize :90 ,
};
export default function profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img className="avatar" src={user.imageUrl} alt=""
            style={{
                width:user.imageSize ,
                height: user.imageSize
            }} />
        </>
    )
}

// map function
const Products =  [ 
    {title:"Apple" ,Id: 1  , isFruit : true},
    {
        title: "Sweet" , Id :2 , isFruit : false  
    },
    {
        title : "sour" , Id : 3   ,isFruit: false
    }
]
export default function shopping(){
const ListItems = Products.map(Product =>
  <li key={Product.Id} style={{color: Product.isFruit ?"red" : "darkgreen"}}>{Product.title}</li>  )
  
  return(
    <ul>{ListItems}</ul>
  )
}

// responding
import {useState} from 'react';
export default function Myapp(){
    return (
        <>
            <h1>This are two Buttons</h1>;
        <Button />
        <Button />
        </>
    )
}
function Button (){
    const [count , setCount] = useState(0);

    function handle_Click(){
        // alert("can i get a bite daddy ");
        setCount(count+1);
    }
    return(
        <button onClick = {handle_Click} >
         Clicked {count} times 
    </button>
    );
}
