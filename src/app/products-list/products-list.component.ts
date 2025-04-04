
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-products-list',
  imports: [FormsModule,ProductCardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  title = 'products list | eccomerce';
  inputData:string ='';
  products:IProduct[] = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
     
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 5.5,
      "rating": 3.28,
      "stock": 44,
      
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nora Russell",
          "reviewerEmail": "nora.russell@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Elena Baker",
          "reviewerEmail": "elena.baker@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 18.14,
      "rating": 3.82,
      "stock": 59,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Levi Hicks",
          "reviewerEmail": "levi.hicks@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Hazel Gardner",
          "reviewerEmail": "hazel.gardner@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
      "discountPercentage": 19.03,
      "rating": 2.51,
      "stock": 68,
     
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Oscar Powers",
          "reviewerEmail": "oscar.powers@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Carter Rivera",
          "reviewerEmail": "carter.rivera@x.dummyjson.com"
        }
      ],
     
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
      "discountPercentage": 2.46,
      "rating": 3.91,
      "stock": 71,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Leo Rivera",
          "reviewerEmail": "leo.rivera@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evan Reed",
          "reviewerEmail": "evan.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Evelyn Sanchez",
          "reviewerEmail": "evelyn.sanchez@x.dummyjson.com"
        }
      ],
    
      "images": [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "price": 49.99,
      "discountPercentage": 0.32,
      "rating": 4.85,
      "stock": 17,
     
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very disappointed!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        }
      ],
     
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "price": 129.99,
      "discountPercentage": 18.64,
      "rating": 2.76,
      "stock": 41,
     
      "reviews": [
        {
          "rating": 1,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lincoln Kelly",
          "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Lucas Allen",
          "reviewerEmail": "lucas.allen@x.dummyjson.com"
        }
      ],
     
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "price": 89.99,
      "discountPercentage": 17.44,
      "rating": 3.31,
      "stock": 91,
     
      "reviews": [
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Zoe Nicholson",
          "reviewerEmail": "zoe.nicholson@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Addison Wright",
          "reviewerEmail": "addison.wright@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "category": "fragrances",
      "price": 69.99,
      "discountPercentage": 11.47,
      "rating": 2.68,
      "stock": 3,
     
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Xavier Wright",
          "reviewerEmail": "xavier.wright@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Mila Hernandez",
          "reviewerEmail": "mila.hernandez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.619Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "category": "fragrances",
      "price": 79.99,
      "discountPercentage": 8.9,
      "rating": 2.69,
      "stock": 93,
      "reviews": [
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aria Parker",
          "reviewerEmail": "aria.parker@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Natalie Harris",
          "reviewerEmail": "natalie.harris@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ava Harris",
          "reviewerEmail": "ava.harris@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
    },
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "category": "furniture",
      "price": 1899.99,
      "discountPercentage": 0.29,
      "rating": 4.14,
      "stock": 47,
      "reviews": [
        {
          "rating": 4,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Julian Newton",
          "reviewerEmail": "julian.newton@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "category": "furniture",
      "price": 2499.99,
      "discountPercentage": 18.54,
      "rating": 3.08,
      "stock": 16,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Tyler Davis",
          "reviewerEmail": "tyler.davis@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Hannah Robinson",
          "reviewerEmail": "hannah.robinson@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Madison Collins",
          "reviewerEmail": "madison.collins@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "category": "furniture",
      "price": 299.99,
      "discountPercentage": 9.58,
      "rating": 4.48,
      "stock": 16,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Avery Carter",
          "reviewerEmail": "avery.carter@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Evelyn Sanchez",
          "reviewerEmail": "evelyn.sanchez@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "category": "furniture",
      "price": 499.99,
      "discountPercentage": 15.23,
      "rating": 4.11,
      "stock": 47,
      "reviews": [
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Leah Gutierrez",
          "reviewerEmail": "leah.gutierrez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Waste of money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Stella Morris",
          "reviewerEmail": "stella.morris@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "category": "furniture",
      "price": 799.99,
      "discountPercentage": 11.22,
      "rating": 3.26,
      "stock": 95,
      "reviews": [
        {
          "rating": 5,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Charlotte Lopez",
          "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Would not recommend!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not worth the price!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ava Harrison",
          "reviewerEmail": "ava.harrison@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
    },
    {
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 1.97,
      "rating": 2.96,
      "stock": 9,
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Logan Lee",
          "reviewerEmail": "logan.lee@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elena Long",
          "reviewerEmail": "elena.long@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Grayson Coleman",
          "reviewerEmail": "grayson.coleman@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "price": 12.99,
      "discountPercentage": 17.99,
      "rating": 2.83,
      "stock": 96,
      "reviews": [
        {
          "rating": 4,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ethan Martinez",
          "reviewerEmail": "ethan.martinez@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Disappointing product!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Owen Fisher",
          "reviewerEmail": "owen.fisher@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very happy with my purchase!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "price": 8.99,
      "discountPercentage": 9.57,
      "rating": 2.88,
      "stock": 13,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very pleased!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Aurora Barnes",
          "reviewerEmail": "aurora.barnes@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ellie Stewart",
          "reviewerEmail": "ellie.stewart@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "category": "groceries",
      "price": 9.99,
      "discountPercentage": 10.46,
      "rating": 4.61,
      "stock": 69,
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Sophia Jones",
          "reviewerEmail": "sophia.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Maya Reed",
          "reviewerEmail": "maya.reed@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Harper Turner",
          "reviewerEmail": "harper.turner@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png"
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "category": "groceries",
      "price": 4.99,
      "discountPercentage": 18.89,
      "rating": 4.01,
      "stock": 22,
      "reviews": [
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Mason Parker",
          "reviewerEmail": "mason.parker@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Poor quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Jonathan Pierce",
          "reviewerEmail": "jonathan.pierce@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Alexander Hernandez",
          "reviewerEmail": "alexander.hernandez@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
    },
    {
      "id": 21,
      "title": "Cucumber",
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "category": "groceries",
      "price": 1.49,
      "discountPercentage": 11.44,
      "rating": 4.71,
      "stock": 22,
      "reviews": [
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Elijah Hill",
          "reviewerEmail": "elijah.hill@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Fast shipping!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Excellent quality!",
          "date": "2024-05-23T08:56:21.620Z",
          "reviewerName": "Ella Cook",
          "reviewerEmail": "ella.cook@x.dummyjson.com"
        }
      ],
      "images": [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
      ],
      "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
    }
  ]
}