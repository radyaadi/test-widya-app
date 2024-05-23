export async function getProducts(token: string) {
  const response = await fetch(`http://localhost:5001/product`, {
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
  const response = await fetch(`http://localhost:5001/product/${productId}`, {
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

export async function getUser(userId: string, token: string) {
  const response = await fetch(`http://localhost:5001/user/${userId}`, {
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
