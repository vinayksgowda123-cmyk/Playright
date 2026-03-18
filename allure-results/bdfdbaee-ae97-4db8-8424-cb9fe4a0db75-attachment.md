# Page snapshot

```yaml
- generic [ref=e1]:
  - heading "Login" [level=1] [ref=e2]
  - generic [ref=e3]:
    - textbox "Email" [ref=e4]: vinayksgowda123@gmail.com
    - textbox "Password" [active] [ref=e5]: vinay@123
    - button "Login" [ref=e6] [cursor=pointer]
  - paragraph [ref=e7]:
    - text: Don't have an account?
    - link "Sign Up" [ref=e8] [cursor=pointer]:
      - /url: /signup
  - paragraph [ref=e9]:
    - link "Forgot Password?" [ref=e10] [cursor=pointer]:
      - /url: /reset
```