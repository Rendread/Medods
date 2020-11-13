<template>
  <div class="header">
    <div class="container">
      <div class="header__body">
        <div
          class="header__burger"
          v-on:click="active_burger = !active_burger"
          v-bind:class="{ active: active_burger }"
        >
          <span></span>
        </div>
        <nav class="header__menu" v-bind:class="{ active: active_burger }">
          <ul class="header__list">
            <li>
              <a href="/" class="header__link">Client creation form</a>
            </li>
            <li>
              <a href="/Medods/game" class="header__link">Game</a>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_burger: false,
    };
  },
  name: "HeaderNav",
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  &:before {
    z-index: 2;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(109, 9, 240, 0.849);
  }
  a {
    font-weight: bold;
  }
}
.header__body {
  position: relative;
  display: flex;
  height: 80px;
  align-items: center;
}
.container {
  display: flex;
  justify-content: flex-end;
  max-width: 1180px;
  margin: 0px auto;
  padding: 0px 10px;
}
.header__list {
  display: flex;
  z-index: 2;
  position: relative;
  li {
    margin: 0px 0px 0px 20px;
    list-style: none;
  }
  .header__link {
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
  }
}

.header__burger {
  display: none;
}

@media (max-width: 767px) {
  .header__body {
    height: 50px;
  }
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    z-index: 3;
  }
  .header__burger:before {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger::after {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger {
    span {
      background-color: #fff;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      top: 9px;
      transition: all 0.3s ease 0s;
    }
    &.active:before {
      transform: rotate(45deg);
      top: 9px;
    }
    &.active:after {
      transform: rotate(-45deg);
      bottom: 9px;
    }
    &.active span {
      transform: scale(0);
    }
  }

  .header__menu {
    position: fixed;
    top: -150%;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(66, 156, 172);
    padding: 60px 0px 0px 0px;
    transition: all 0.3s ease 0s;
    &.active {
      top: 0;
    }
  }
  .header__list {
    display: inline;

    li {
      margin: 0px 0px 20px 0px;
    }
  }
}
</style>

<router-link to="/">Client creation form</router-link> |
<router-link to="/about">Game</router-link>
<hr />
