const { Pool } = require('pg');

module.exports = new Pool({
          user: "ikunfqzytdznaz",
          host: "ec2-35-168-145-180.compute-1.amazonaws.com",
          database: "ddmkivf0gb1euq",
          password:
            "aa1f2ee0893351effe5855695991a30b7032f1eaa2901d1f080bb6380bc7e29e",
          port: 5432,
          ssl: {
            rejectUnauthorized: false,
          }
        });