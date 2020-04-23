<template>
  <b-navbar
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand :to="{ name: 'Status' }" href="status">STATUS</b-navbar-brand>
    <b-navbar-brand :to="{ name: 'Results' }" href="results">RESULT</b-navbar-brand>
    <b-navbar-brand :to="{ name: 'Maintenance' }" href="maintenance">MAINTENANCE</b-navbar-brand>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>