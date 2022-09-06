// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setDogHtml() {
    const { name, avatar, age, bio } = this;

    document.getElementById("user").style.backgroundImage = `url(${avatar})`;

    return `
    <img src="images/badge-like.png" alt="badge-like" class="bage like hidden" />
    <img src="images/badge-nope.png" alt="badge-nope" class="bage nope hidden" />
    <p class="user-info">${name}, ${age}</p>
    <p class="bio">${bio}</p>
    `;
  }
}

export default Dog;
