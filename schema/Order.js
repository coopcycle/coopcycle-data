cube(`Order`, {
  sql: `SELECT * FROM read_csv('s3://data/orders.csv', header = true, auto_detect = true, decimal_separator = ',')`,

  dimensions: {
    number: {
      sql: `"Order number"`,
      type: `string`
    },
    restaurant: {
      sql: `"Restaurant"`,
      type: `string`
    },
    // https://duckdb.org/docs/sql/functions/dateformat
    completed_at: {
      sql: `STRPTIME("Completed at", '%Y-%m-%d %H:%M')`,
      type: `time`
    },
    // https://duckdb.org/docs/sql/functions/datepart.html
    day_of_week: {
      sql: `DATE_PART('isodow', ${CUBE.completed_at})`,
      type: `number`
    },
    // https://duckdb.org/docs/sql/functions/datepart
    hour: {
      sql: `DATE_PART('hour', ${CUBE.completed_at})`,
      type: `number`
    }
  },

  measures: {
    total_incl_vat: {
      sql: `"Total (incl. VAT)"`,
      type: `sum`,
      format: `currency`,
    },
    platform_fee: {
      sql: `"Platform fee"`,
      type: `sum`,
      format: `currency`,
    },
  }

});
