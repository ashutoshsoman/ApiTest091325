// @ts-check
import { test, expect, request } from '@playwright/test';


test('getRequest',async({request})=>{
    
    var response = await request.get("https://api.restful-api.dev/objects");
    
    console.log(response);

    console.log(await response.headers()['content-type']);

    const body = await response.json();
    console.log(body);
    console.log(typeof(body));

   

    // console.log(body[0].id);

    // console.log(typeof(body[0].id));

    // await  expect(body[0].id).toBe("1");

    // console.log("test case passed");

           const header = await response.headers();
     
    // console.log(typeof(header));

    // console.log(header);
    
    // for(var i in header)
    //    console.log(i + "--->" + header[i]);

            console.log(header['content-type']);

            await expect(header['content-type']).toBe('application/json');

            console.log("----------VALIDATION PASSED------------");



            for (var i  in response)
              console.log(i) ;
       
             console.log("----------VALIDATION PASSED------------");

             for (var i in request)
                    console.log(typeof(i));


});


test('postRequest', async({request})=>{
  
 var response = await request.post("https://api.restful-api.dev/objects",{

  data:{
    
      "name": "Apple MacBook Pro 16",
      "data": {
          "year": 2019,
          "price": 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
              }
       }
       }
  
)

const body  = await response.json();
console.log(body);
console.log(typeof(body));

console.log(body['data']['year'])

await expect(body['data']['year']).toBe(2019);

console.log("year validation passed")
});

