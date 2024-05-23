export async function getProducts(token: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}

export async function getProduct(productId: string, token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}

export async function getUser(userId: string, token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}
