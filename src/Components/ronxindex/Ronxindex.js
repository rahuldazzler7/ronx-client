import React, { useState } from 'react';

class Ronxindex extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return (
            <div>
                <div id="leftmenu">
                    <div id="date_time">
                        <div id="date" className="semi_arc e4">
                        <div className="semi_arc_2 e4_1">
                            <div className="counterspin4"></div>
                        </div>
                            <div style={{fontSize: "40px", marginTop: "25px"}}>04</div>
                            <div style={{fontSize: "25px"}}>January</div>
                        </div>
                        
                        <div id="time" className="arc e1">
                            <div style={{fontSize: "23px", marginLeft: "-10px", marginTop: "23px"}}>23:41</div>
                            <div style={{fontSize: "15px", marginLeft: "40px", marginTop: "-30px", display: "inline"}}>31</div>
                            <div style={{fontSize: "17px", marginTop: "10px"}}>Tuesday</div>
                        </div>
                    </div>
                    
                    <p className="title">Performance</p>
                    <div className="hline title_underline"></div>
                    
                    <span className="menuitem entypo-gauge" style={{fontSize: "30px", marginLeft: "10px"}}>
                        <p id="cpu" className="caption" style={{fontSize: "20px"}}>CPU Usage: 19%</p>
                    </span> <br/>
                    
                    <span className="menuitem entypo-chart-area" style={{fontSize: "30px", marginLeft: "10px"}}>
                        <p id="ram" className="caption" style={{fontSize: "20px"}}>Physical Memory: 28%</p>
                    </span> <br/>
                    
                    <span className="menuitem entypo-chart-pie" style={{fontSize: "30px", marginLeft: "10px"}}>
                        <p id="proc" className="caption" style={{fontSize: "20px"}}>Processes: 73</p>
                    </span>
                    
                    <p className="title">Shortcuts</p>
                    <div className="hline title_underline"></div> 
                    
                    <div className="menu">
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">User</p> </button>
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Documents</p> </button>
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Computer</p> </button>
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Control Panel</p> </button>
                        
                        <hr style={{borderColor: "transparent", margin: 0}}/>
                        <div className="hline" style={{marginTop: "5px", marginBottom: "5px"}}></div>
                        
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Custom Path 1</p> </button>
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Custom Path 2</p> </button>
                        <button className="menuitem"> <span className="entypo-right-open"/> <p className="caption">Custom Path 3</p> </button>
                    </div>
                    
                    <p className="title">Social</p>
                    <div className="hline title_underline"></div>
                    
                    <div className="app_icon entypo-facebook-squared"></div>
                    <div className="app_icon entypo-twitter"></div>
                    <div className="app_icon entypo-gplus"></div>
                    <div className="app_icon entypo-skype"></div>
                    
                    <div className="app_icon entypo-tumblr"></div>
                    <div className="app_icon entypo-pinterest"></div>
                    <div className="app_icon entypo-soundcloud"></div>
                    <div className="app_icon entypo-stumbleupon"></div>
                    
                    </div>

                    <div id="rightmenu">
                    <p className="title" style={{textAlign: "left", marginLeft: "10px"}}>Notes</p>
                    <div id="particle10" className="hline"></div>
                    <div id="particle11" className="hline"></div>
                    <div id="particle12" className="vline"></div>
                    <textarea id="note_input" rows="12" cols="44">For the maximum viewing experience, please view this pen in full screen where the code is displayed to the side of the display.
                        
                        To Complete:
                        - Right Menu (this side of the screen)
                        - Make this note restricted to 11 rows
                        - Fill in empty space below
                        - Weather widget next to date/time
                        - Place quick access taskbar down bottom
                        - Fill in space at the top</textarea>
                </div>
                
                    <div id="arc_container">
                    <div className="arc_reactor">
                        <div className="case_container">
                        <div className="e7">
                            <div className="semi_arc_3 e5_1">
                            <div className="semi_arc_3 e5_2">
                                <div className="semi_arc_3 e5_3">
                                <div className="semi_arc_3 e5_4"></div>
                                </div>
                            </div>
                            </div>
                            <div className="core2"></div>
                        </div>
                        <ul className="marks">
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                            <li></li><li></li><li></li><li></li><li></li><li></li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <canvas id="particle1" width="20" height="500"></canvas> <script>
                    var canvas = document.getElementById('particle1');
                    var context = canvas.getContext('2d');

                    context.beginPath();
                    context.moveTo(0, 0);
                    context.lineTo(0, 70);
                    context.lineTo(10, 85);
                    context.lineTo(10, 135);
                    context.lineTo(0, 150);
                    context.lineTo(0, 480);
                    context.lineTo(5, 490);
                    context.lineTo(10, 490);
                    context.lineTo(20, 490);
                    context.lineTo(20, 250);
                    context.lineTo(10, 235);
                    context.lineTo(10, 185);
                    context.lineTo(20, 170);
                    context.lineTo(20, 40);
                    context.lineTo(10, 30);
                    context.lineTo(10, 20);

                    context.closePath();
                    context.lineWidth = 1;
                    context.fillStyle = 'rgba(2,254,255,0.3)';
                    context.fill();
                    context.strokeStyle = 'transparent';
                    context.stroke();
                    </script>

                    <canvas id="particle1_1" width="40" height="510"></canvas> <script>
                    var canvas = document.getElementById('particle1_1');
                    var context = canvas.getContext('2d');

                    context.beginPath();
                    context.lineTo(0, 0);
                    context.lineTo(10, 15);
                    context.lineTo(10, 65);
                    context.lineTo(0, 80);
                    context.lineTo(0, 0);

                    context.closePath();
                    context.lineWidth = 1;
                    context.fillStyle = 'rgba(2,254,255,0.3)';
                    context.fill();
                    context.strokeStyle = 'transparent';
                    context.stroke();
                    </script>

                    <canvas id="particle1_2" width="40" height="510"></canvas> <script>
                    var canvas = document.getElementById('particle1_2');
                    var context = canvas.getContext('2d');

                    context.beginPath();
                    context.lineTo(10, 80);
                    context.lineTo(0, 65);
                    context.lineTo(0, 15);
                    context.lineTo(10, 0);
                    context.lineTo(10, 80);

                    context.closePath();
                    context.lineWidth = 1;
                    context.fillStyle = 'rgba(2,254,255,0.3)';
                    context.fill();
                    context.strokeStyle = 'transparent';
                    context.stroke();
                    </script>

                    {/* <div id="particle1_3">
                    > > > >
                    </div> */}

                    <div id="particle2">▶<br/>▶<br/>▶</div>
                    <div id="particle3" className="vline"/>
                    <div id="particle4" className="vline"/>
                    <div id="particle5" className="vline"/>
                    <div id="particle6" className="vline"/>
                    <div id="particle7" className="vline"/>
                    <div id="particle8" className="vline"/>
                    <div id="particle9" className="vline"/>
            </div>
        )
    }
}

export default Ronxindex;