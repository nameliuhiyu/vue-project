<template>
<div>
  <div class="pop"></div>
  <div class="pop_con">
     <div class="header">
      <slot name="header"></slot>
    </div>
    <div style="width:470px;">
      <slot name="center"></slot>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'winComp',
  data() {
    return {};
  },
};
</script>
