// validation script here
const inputs=document.querySelectorAll('input');

const patterns={
    telephone:/^\d{11}$/,
    username:/^([a-z\d-_]){5,12}$/i,
    password:/^[\w@-]{8,12}$/,
    slug:/^[a-z\d-]{8,20}/,
    email:/^([a-z0-9\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}



function validate(field,regex){

        // console.log(field.value,regex)
 
          if(regex.test(field.value)){
              field.className='valid';
          }
          else{
              field.className="invalid";
          }


}








inputs.forEach((input)=>{
      input.addEventListener('keyup',(e)=>{

         //   console.log(e.target.attributes.name.value);
         validate(e.target,patterns[e.target.attributes.name.value]);

        



      });
});

