<script>
import Historial from '@/Datos/Historial.js'

export default {
  name: 'Historial',

  data() {
    return {
      historial: []
    }
  },

  async mounted() {
    const service = new Historial()
    this.historial = await service.getAll()
  }
}
</script>

<template>

  <div v-if="historial.length > 0">

    <div class="table-responsive my-3">

      <table class="table table-striped table-hover table-bordered">

        <thead>
          <tr>
            <th>Monto</th>
            <th>Plazo</th>
            <th>TNA</th>
            <th>Interés Ganado</th>
            <th>Total Final</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="(item, index) in historial" :key="index">

            <td>{{ item.Capital }}</td>

            <td>{{ item["Plazo en días"] }}</td>

            <td>{{ item["TNA aplicada"] }}%</td>

            <td>{{ item["Intereses ganados"] }}</td>

            <td>{{ item["Monto total"] }}</td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

  <h4 v-else class="alert alert-danger">
    No se encontró información del historial
  </h4>

</template>