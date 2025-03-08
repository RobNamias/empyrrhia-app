import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Contact = () => {
    return (
        function validateForm() {
            var name = document.forms["myForm"]["name"];
            var email = document.forms["myForm"]["email"];
            var message = document.forms["myForm"]["message"];

            if (name.value === "") {
                document.getElementById('errorname').innerHTML = "Veuillez entrez un nom valide";
                name.focus();
                return false;
            } else {
                document.getElementById('errorname').innerHTML = "";
            }

            if (email.value === "") {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            } else {
                document.getElementById('erroremail').innerHTML = "";
            }

            if (email.value.indexOf("@", 0) < 0) {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            }

            if (email.value.indexOf(".", 0) < 0) {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            }

            if (message.value === "") {
                document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
                message.focus();
                return false;
            } else {
                document.getElementById('errormsg').innerHTML = "";
            }

            return true;
        },

        <div>
            <div>
                <Navigation />
            </div>


            <div className='formContact'>
                <div className="formContactHead">
                    <p>Organisateurs, associations, bookers, promoteurs, sponsors, marcheurs de l'ombre ou simples curieux...
                        Écrivez-nous, pour nous faire part de vos projets, de vos impressions ainsi que de vos souhaits.
                        Nous nous ferons un plaisir de vous répondre sous les plus brefs délais.
                    </p>
                    <hr />
                </div>
                <div className="conteneurForm">
                    <div className="coordonnees">
                        <div className="coordonneesCentre">
                            <h1>Empyrrhia</h1>
                            <h1>intense.prod@Mescouilles.com</h1>
                        </div>
                    </div>


                    {/* <form name="myForm" action="mailto:cedric.rodien@hotmail.fr?subject=TestEmpyrhia" enctype="multipart/form-data" onsubmit="return validateForm()" method="post"> */}
                    <form method="POST" action="mailto:cedric.rodien@hotmail.fr?subject=TestEmpyrhia" enctype="multipart/form-data">
                        <table class="form-style">
                            <tr>
                                <td>
                                    <label>
                                        Votre nom <span class="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <input type="text" name="name" class="long" />
                                    <span class="error" id="errorname"></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Votre adresse e-mail <span class="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <input type="email" name="email" class="long" />
                                    <span class="error" id="erroremail"></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Message <span class="required">*</span>
                                    </label>
                                </td>
                                <td>
                                    <textarea name="message" class="long field-textarea"></textarea>
                                    <span class="error" id="errormsg"></span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Envoyer" />
                                    <input type="reset" value="Réinitialiser" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;