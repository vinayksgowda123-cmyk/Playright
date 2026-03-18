# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Welcome to Cloth Shop" [level=1] [ref=e2]
  - navigation [ref=e3]:
    - link "Logout" [ref=e4] [cursor=pointer]:
      - /url: "#"
    - text: "|"
    - link "Cart" [ref=e5] [cursor=pointer]:
      - /url: /cart
  - heading "Available Clothes" [level=2] [ref=e6]
  - generic [ref=e7]:
    - heading "T-Shirt" [level=3] [ref=e8]
    - paragraph [ref=e9]: "Price: $20"
    - button "Add to Cart" [ref=e10] [cursor=pointer]
  - generic [ref=e11]:
    - heading "Jeans" [level=3] [ref=e12]
    - paragraph [ref=e13]: "Price: $50"
    - button "Add to Cart" [ref=e14] [cursor=pointer]
  - generic [ref=e15]:
    - heading "Jacket" [level=3] [ref=e16]
    - paragraph [ref=e17]: "Price: $80"
    - button "Add to Cart" [ref=e18] [cursor=pointer]
```