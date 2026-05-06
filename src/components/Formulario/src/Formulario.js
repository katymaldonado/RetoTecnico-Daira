import InteresesGanados from '@/Datos/intereses.js'

export default {

  name: 'formulario',

  data() {

    return {

      InteresesGanados: new InteresesGanados(),

      intereses: [],

      interes: {
        monto: null,
        plazo: null,
        tna: null
      }

    }

  },

  methods: {

    async enviar() {

      const body = {

        capital_invertido: this.interes.monto,

        plazo_en_dias: this.interes.plazo,

        tna: this.interes.tna

      }

      try {

        const respuesta = await this.InteresesGanados.post(body)

        console.log(respuesta)

        this.intereses = [respuesta]

        this.limpiarFormulario()

      }
      catch (error) {

        console.error('Error al enviar', error)

      }

    },

    limpiarFormulario() {

      this.interes = {
        monto: null,
        plazo: null,
        tna: null
      }

    },
    interesGanado(monto, plazo, tna) {

      return (
        monto * (tna / 100) * (plazo / 365)
      ).toFixed(2)

    },

    montoFinal(monto, plazo, tna) {
      const r = tna / 100;
      return monto * (1 + (r * plazo / 365));
    }

  },

  computed: {

    errorMonto() {

      let mensaje = ''

      if (
        this.interes.monto === null ||
        this.interes.monto === ''
      ) {
        mensaje = 'Campo requerido'
      }

      else if (isNaN(this.interes.monto)) {
        mensaje = 'Debe ser un número'
      }

      else if (this.interes.monto <= 0) {
        mensaje = 'Debe ser mayor a 0'
      }

      return {
        mostrar: mensaje != '' && this.interes.monto !== null,
        mensaje,
        ok: mensaje == ''
      }

    },

    errorPlazo() {

      let mensaje = ''

      if (
        this.interes.plazo === null ||
        this.interes.plazo === ''
      ) {
        mensaje = 'Campo requerido'
      }

      else if (isNaN(this.interes.plazo)) {
        mensaje = 'Debe ser un número'
      }

      else if (this.interes.plazo < 30) {
        mensaje = 'El mínimo es 30 días'
      }

      return {
        mostrar: mensaje != '' && this.interes.plazo !== null,
        mensaje,
        ok: mensaje == ''
      }

    },

    errorTna() {

      let mensaje = ''

      if (
        this.interes.tna === null ||
        this.interes.tna === ''
      ) {
        mensaje = 'Campo requerido'
      }

      else if (isNaN(this.interes.tna)) {
        mensaje = 'Debe ser un número'
      }

      else if (this.interes.tna <= 0) {
        mensaje = 'Debe ser mayor a 0'
      }

      return {
        mostrar: mensaje != '' && this.interes.tna !== null,
        mensaje,
        ok: mensaje == ''
      }

    }

  }

}