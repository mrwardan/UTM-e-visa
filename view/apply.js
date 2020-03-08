module.exports = function () {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Apply For Visa</title>
        <link rel="stylesheet" href="css/apply.css">
        <script src="js/apply.js"></script>
    </head>
    
    <body>
    
        <!-- for first page to ask for user's info -->
        <div id="Userinfo">
            <h2> <span id="RE">STUDENT REGISTRATION FORM</span> </h2>
            <hr> <br>
    
        <form action="/upload" method="post" enctype="multipart/form-data">

            <table align="center" cellpadding="10" id="table0">
                <!----- Passport ID ---------------------------------------------------------->
    
                <tr>
                    <td>Passport ID<span style="color:red; font-weight: bold">*</span></td>
                    <td><input id="file" placeholder="passport ID" type="text" name="passortid" maxlength="30" />
    
                    </td>
                </tr>
    
    
                <!----- Full Name ---------------------------------------------------------->
    
                <tr>
                    <td>Full NAME<span   style="color:red; font-weight: bold">*</span></td>
                    <td><input placeholder="Your Full Name" id="file1" type="text" name="fullname" maxlength="30" />
    
                    </td>
                </tr>
    
    
                <!----- nationality ---------------------------------------------------------->
                <tr>
                    <td>Nationality<span style="color:red; font-weight: bold">*</span></td>
                    <td><input placeholder="Your Nationality" id="file2" type="text" name="nationality" maxlength="30" />
    
                    </td>
                </tr>
    
                <!----- Date Of Birth -------------------------------------------------------->
                <tr>
    
                    <td>DATE OF BIRTH</td> </span>
    
                    <td>
                        <select name="Birthday_day" id="Birthday_Day" onclick="getDate();">
                            <option value="-1">Day:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
    
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
    
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
    
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
    
                            <option value="31">31</option>
                        </select>
    
                        <select id="Birthday_Month" name="Birthday_Month">
                            <option value="-1">Month:</option>
                            <option value="January">Jan</option>
                            <option value="February">Feb</option>
                            <option value="March">Mar</option>
                            <option value="April">Apr</option>
                            <option value="May">May</option>
                            <option value="June">Jun</option>
                            <option value="July">Jul</option>
                            <option value="August">Aug</option>
                            <option value="September">Sep</option>
                            <option value="October">Oct</option>
                            <option value="November">Nov</option>
                            <option value="December">Dec</option>
                        </select>
    
                        <select name="Birthday_Year" id="Birthday_Year">
    
                            <option value="-1">Year:</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
    
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
    
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                        </select>
    
                    </td>
                </tr>
    
                <!----- Course ---------------------------------------------------------->
                <tr>
                    <td>Course<span style="color:red; font-weight: bold">*</span></td>
                    <td><input  placeholder="Your Course" id="file3" type="text" name="course" /></td>
                </tr>
    
                <!----- Email Id ---------------------------------------------------------->
                <tr>
                    <td>Email ID<span style="color:red; font-weight: bold">*</span></td>
                    <td><input placeholder="Your E-Mail" id="file4" type="text" name="emailid" maxlength="100" /></td>
                </tr>
    
            
    
                <!----- Gender ----------------------------------------------------------->
                <tr>
    
                    <td>Select Gender:</td>
    
                    <td>
                        Male<input type="radio" name="Gender" value="Male" />
                        Female <input type="radio" name="Gender" value="Female" />
                    </td>
    
                </tr>
    
                <!----- year of study ---------------------------------------------------------->
                <tr>
                    <td>Year Of Study<span style="color:red; font-weight: bold">*</span> <br /><br /><br /></td>
                    <td><input type="number" id="file5" name="yearofstudy" rows="4" cols="22"
                            placeholder="Numbers Only"></input></td>
                </tr>
    
                <!----- Address ---------------------------------------------------------->
                <tr>
                        <td>Address<span style="color:red; font-weight: bold">*</span> <br /><br /><br /></td>
                        <td><input type="text" id="file13" name="address" rows="4" cols="22"
                                placeholder="Your Address"></input></td>
                    </tr>
    
                <!--  Address -->
                <tr id="myadd2">
                    <td> (Oprional) <input type="button" value="Add Address" onclick="add2address()" id="Addtwo"></td>
                    <td id="col"></td>
                </tr>
    
    
                <!----- Institution ---------------------------------------------------------->
                <tr>
                    <td>Institution Name<span style="color:red; font-weight: bold">*</span></td>
                    <td><input placeholder="Your Institution" id="file6" type="text" name="institution" maxlength="30" />
    
                    </td>
                </tr>
    
    
    
                <!----- Place of birth ---------------------------------------------------------->
                <tr>
                    <td>Place Of Birth<span style="color:red; font-weight: bold">*</span></td>
                    <td><input placeholder="Your Place Of Birth " id="file7" type="text" name="pob" /></td>
                </tr>
    
    
    
    
    
            </table>
    
            
            <div id="nm">
                <input type="button" value="Next" id="nextBtn" onclick="showNextPage('upload', 'Userinfo')">
            </div>
    
        </div>
    
    
    
        <div id="upload" class="common"> 
    
    
            <div id="V0">
    
                 <span id="youmust" style="color: red">Please upload all required documents</span> <br> <br>
                <h1 id="txtsh" style="font-size: 2em">uplode 4x4 image</h1>
               <input type="file"  accept="image/*" name="photo" id="file8" class="butt" >
    
    
              </div>
           <div id="V1">
            <h id="txtph" style="font-size: 2em">Passport copy</h> <br>
            <input type="file" accept="image/*" name="photo"  id="file9" class="butt" >
           </div>
    
           
                <div id="V2">
        
                <h2 id="txtps">Attendance Veriﬁcation </h2>
                <br>
                <div id="cen">
                    <input type="file" id="file10" class="butt"  accept="image/*" name="photo" >
                </div>
    
    
    
                   <div id="V3" >
    
                    <h2 id="txtps">Offer Letter</h2>
                    
                    
                      <input type="file" id="file11" class="butt" accept="image/*" name="photo" >
            
                     </div>
                        
                     <div id="V4">
    
                        <h2 id="txtps">Payment receipt</h2>
                        
                            <input type="file" id="file12"  class="butt"  accept="image/*" name="photo" >
                     
    
    
    
                </div>
    
    
        </div>
        
    
        <!-- offer letter -->
        <div id="Ofletter">
        
                </div>
    
                <div id="teco">
    
                    <div>
                        <h3> make sure that all of your supporting documents have been submitted successfully. Otherwise
                            your process will
                            be automatically canceled </h3>
                    </div>
                    <!-- <input id="submit" type="checkbox"> -->
                </div> <br>
                <div id="cenBN">
    
                    <input type="button" value="Back" onclick="showPreviousPage('Userinfo', 'upload');" class="buttback"> </input>
            
                    <br> <br>
                </div>
                <br>
                <input onclick="documentsOftheUser()" class="pbtmS" type="submit" value="Submit" id="sumbit"></input>
                <div id="alert">
                    <p>sorry you must uplode complete document!!!!</p>
                </div>
    
        </form>
    
        </div>
        <!-- Page for Invalid Login -->
        <!-- <div id="invalid">
    
            <p> You have entered wrong username or password.</p>
            <p> Please <a href="/">goback</a> and try again.</p>
    
        </div>
        <br> -->
    
        <div id="thank">
    
            <div id="thank2">
    
                <img src="../img/check-solid.svg" width="200" height="150" id="nikeimage">
                <p id="tha">
                    <h3> <strong> Thank you, your application has been submitted </strong> </h3>
                </p>
                <input type="button" value="Done" onclick="showNextPage('signin', 'thank');" id="done"><a href="https://www.utm.my/"> </a></inpu>
            </div>
    
    
        </div>
        <div id="lastpage">
    
    
    
        </div>
    
    </body>
    
    </html>
    `
}