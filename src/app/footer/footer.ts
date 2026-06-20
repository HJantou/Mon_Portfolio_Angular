import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  ngOnInit(): void {
   let form = document.querySelector('form');

    form!.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form!);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: json
      })
      .then(async (response) => {
        if (response.ok) {
        alert("Message envoyé avec succès !");
        form!.reset();
        }
      })
      .catch(error => {
        console.log(error);
        alert("Une erreur est survenue.");
      }); 
    }); 
 }
}
