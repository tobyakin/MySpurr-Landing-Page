<template>
  <div
    class="modal backdrop-blur z-[100] fixed animate__zoomIn animate__rubberBand animate__fadeOut h-screen"
  >
    <div
      class="modal__body relative w-full md:max-w-[1500px] bg-white !rounded-[50.063px] m-0 md:max-w-2/12 md:w-4/5"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.modal {
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  // background-color: transparent;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.81);
  // backdrop-filter: blur(7px);

  &__body {
    position: relative;
    // margin-left: auto;
    // width: 40%;
    // background-color: $color-white;
    border-radius: 12px;
    // padding: 20px 30px;
    // padding-bottom: 0px;
    animation: slidedown 0.8s ease;
    // border:'2px solid red';
    // height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
