export default function Contact(){
    return (<div style={{minHeight:"100vh" , padding:"20px 20vw", display:"flex", gap:"10vw"}}>
     

     <div>
     <h1>Contact Us</h1>
     <h1>GET IN TOUCH WITH US</h1>
     
    <br/>

    <p style={{width:"25vw"}}>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
    
    <h1>Our Location</h1>
    <p>99 S.t Jomblo Park Pekanbaru 28292. <br/> Indonesia</p>
    
    <h1>Phone Number</h1>
    <p>(+62)81 414 257 9980</p>


    <h1>Email Address</h1>
    <p>info@yourdomain.com</p>
    </div>

    <div style={{fontSize:"25px", marginTop:"10vh"}}>
        <form style={{backgroundColor:"#e6e6e6", padding:"5vh 5vw", borderRadius:"20px"}}>
            <label style={{ marginRight:"25px"}}>Name</label>
            <input style={{ height:"25px", width:"200px"}} type="text" />
            <div style={{margin:"25px"}}></div>
        
            <label  style={{marginRight:"25px"} }>Email</label>
            <input style={{ height:"25px", width:"200px"}} type="text" />
            <div style={{margin:"25px"}}></div>
  
            <label  style={{marginRight:"25px"}}>Your phone</label>
            <input style={{ height:"25px", width:"200px"}} type="text" />
            <div style={{margin:"25px"}}></div>

            <label  style={{marginRight:"25px"}}>Your Massage</label>
            <textarea ></textarea>
        </form>
    </div>

    </div>)
}