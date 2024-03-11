<template>
  <div
    class="modal backdrop-blur animate__zoomIn animate__rubberBand animate__fadeOut min-h-screen h-full"
  >
    <div class="modal__body relative mx-auto bg-white m-0 md:px-5 py-4 px-4">
      <img class="w-[80px] h-[80px]" src="./myspurrLoader.gif" alt="" />
    </div>
  </div>
</template>
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
  background: rgba(245, 243, 243, 0.017);
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
