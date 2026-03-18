import {expect,test} from "@playwright/test"

test('should be ok',async({request})=>
{
  const health= await request.get('/health')

  expect(health.ok()).toBeTruthy();
  expect(health.status()).toBe(200);
  console.log(health.status());
  console.log(health);
});

test('signup redirects to /home for valid credentials', async ({ request }) => {
    const response = await request.post('/signup', {
        data: { username: 'vinayksgowda123@gmail.com', password: 'vinay@123' },
        maxRedirects: 0,
    })

    expect(response.status()).toBe(302)
    expect(response.headers()['location']).toBe('/home')
})

// test('signup redirects to /signup for invalid credentials', async ({ request }) => {
//     const response = await request.post('/signup', {
//         data: { username: 'wrong', password: 'creds' },
//         maxRedirects: 0,
//     })

//     expect(response.status()).toBe(302)
//     expect(response.headers()['location']).toBe('/signup')
// })

