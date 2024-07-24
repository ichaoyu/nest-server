module.exports = {
  apps: [
    {
      name: 'fullstack',
      script: './main.js',
      exec_mode: 'cluster',
      combine_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/pm2-err.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      exec_mode: 'fork',
      max_memory_restart: '200M',
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
    },
  ],
};
