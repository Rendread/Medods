<template>
  <div class="client-creation-form">
    <ClientForm></ClientForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ClientForm from "@/components/clientForm/ClientForm";

export default {
  name: "Home",
  components: { ClientForm },
  methods: {},
};
</script>

<style lang="scss" scoped>
.client-creation-form {
  padding-top: 100px;
  width: 100%;
}
@media (max-width: 767px) {
  .client-creation-form {
    padding-top: 50px;
  }
}
</style>
