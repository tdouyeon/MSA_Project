const boardPath = "http://10.0.2.2:8081";

export const getList = async () => {
  try {
    const response = await fetch(`${boardPath}/list`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (email, title, post_content) => {
  try {
    const response = await fetch(`${boardPath}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        title: title,
        post_content: post_content,
      }),
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const patchPost = async (id, email, title, post_content) => {
  try {
    const response = await fetch(`${boardPath}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: email,
        title: title,
        post_content: post_content,
        regTime: new Date().toISOString(),
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${boardPath}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const message = await response.text();
    return message;
  } catch (error) {
    console.error(error);
  }
};
