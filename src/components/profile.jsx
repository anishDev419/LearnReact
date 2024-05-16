
const user = {
    name: 'Hedy Lamar',
    imageUrl: "https://awomensthing.org/wp-content/uploads/2017/05/A-Womens-Thing-hedy-lamarr-ziegfeld-girl-reframed-pictures-02.jpg",
    imageSize: 90
  }

  export default function Profile() {
    return(
        <>
            <h1> {user.name} </h1>
            <img
                alt={'Photo of ' + user.name}
                src={user.imageUrl}
                style={{width:user.imageSize, width:user.imageSize}}
            ></img>
        </>

    )
  }