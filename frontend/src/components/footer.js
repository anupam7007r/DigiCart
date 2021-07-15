import './footer.css';

const Footer = () => {


    return (
        <div class="copyright-area">
      <div class="container">
         <div class="row">
            <div class="col-lg-6 col-md-6">
               <ul>
                  <li><a href="privacy">Privacy Policy</a></li>
                  <li><a href="cookie" >Cookie Policy</a></li>
               </ul>
            </div>
            <div class="col-lg-6 col-md-6 text-right">
              <p> © <script type="text/JavaScript">document.write(new Date().getFullYear());</script>2021. All rights reserved to DiGiCart Solutions Ltd.</p>
            </div>
         </div>
      </div>
   </div>
    )
}

export default Footer;