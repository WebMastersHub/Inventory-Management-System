import Mickey from "./assets/mickey-removebg-preview.png"
import Cat from "./category"
function Invent(){
    return(<>

        <div className="system">
            <div className="report">
                <ul className="invent-list">
                    <li> <ion-icon name="add-circle-outline"></ion-icon> Add</li>
                    <li> <ion-icon name="bag-handle-outline"></ion-icon> Buy</li>
                    <li> <ion-icon name="calendar-outline"></ion-icon> Inventory Report</li>
                    <li> <ion-icon name="bar-chart-outline"></ion-icon> Sales Report</li>
                </ul>
                <span> <ion-icon name="log-out-outline"></ion-icon> Log Out</span>
            </div>

            <div className="main-content">
                <div className="rice">
                    <div className="search">
                    <input className="might" type="text" placeholder="Search" />
                    <div className="school">
                        <img className="mike" src={Mickey} alt="" />
                        <span>illiamah</span>
                    </div>
                    </div>
                    <div className="file">
                        <button className="export">Export File</button>                               
                    </div>
          
                </div>

                
                <div className="table">
                    <div className="nav-bar">
                        <span>1/10</span>
                        <div className="greater">
                            <button className="but"> &lt; </button>
                            <button className="but"> &gt; </button>                            
                        </div>
                        <input className="trist" placeholder="Search" type="text" />
                        <span>Total Pages: 12</span>
                    </div>

                    <Cat name="Name" price="Price($)" category="Category" stock="Stock" date="Date" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                    <Cat name="Blender" price="500" category="Electronics" stock="10" date="2025-1-06" />
                </div>

                




            </div>
        </div>
    
    
    
    
    
    </>)
}

export default Invent