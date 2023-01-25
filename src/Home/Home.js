import wall from '../assets/wallpaper.jpg';
const Home = () => {
    return (<div>
        <div classname="container">
            {/* <div classname="row">
                <div classname="col-12">
                    <h1 style={{ textAlign: "center" }}>welcome to newton School</h1>
                </div>
            </div> */}
            <div classname="row" style={{marginTop:"40px"}}>
            <div className='col-10'>
                <img src={wall} class="img-fluid" alt="Responsive image" />
            </div>
           

            </div>

        </div>
    </div>)

}
export default Home;