
<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand :to="{ name: 'status' }" href="status">STATUS</b-navbar-brand>
    <b-navbar-brand :to="{ name: 'results' }" href="results">RESULT</b-navbar-brand>
    <b-navbar-brand :to="{ name: 'maintenance' }">MAINTENANCE</b-navbar-brand>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar"
}
</script>
