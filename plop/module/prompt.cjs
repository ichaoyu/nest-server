const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
module.exports = {
  description: 'Create nest Module',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（如：website）',
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称（如： flink）',
    },
    {
      type: 'input',
      name: 'title',
      message: '请输入模块汉字名称（如：友情链接）',
    },
  ],
  actions: (data) => {
    const { name, path, title } = data;
    const UpperCaseName = toUpperCase(name);

    const actions = [];
    if (name) {
      actions.push(
        {
          type: 'addMany',
          path: `./src/modules/${path}/${name}/index.ts`,
          templateFile: './plop/module/index.hbs',
          data: {
            name,
          },
        },
        // controller
        {
          type: 'add',
          path: `./src/modules/${path}/${name}/${name}.controller.ts`,
          templateFile: './plop/module/controller.hbs',
          data: {
            path,
            name,
            title,
            UpperCaseName,
          },
        },
        // service
        {
          type: 'add',
          path: `./src/modules/${path}/${name}/${name}.service.ts`,
          templateFile: './plop/module/service.hbs',
          data: {
            path,
            name,
            title,
            UpperCaseName,
          },
        },
        // module
        {
          type: 'add',
          path: `./src/modules/${path}/${name}/${name}.module.ts`,
          templateFile: './plop/module/module.hbs',
          data: {
            path,
            name,
            title,
            UpperCaseName,
          },
        },
        // dto
        {
          type: 'add',
          path: `./src/modules/${path}/${name}/${name}.dto.ts`,
          templateFile: './plop/module/dto.hbs',
          data: {
            path,
            name,
            title,
            UpperCaseName,
          },
        },
        // vo
        {
          type: 'add',
          path: `./src/modules/${path}/${name}/${name}.vo.ts`,
          templateFile: './plop/module/vo.hbs',
          data: {
            path,
            name,
            title,
            UpperCaseName,
          },
        },
      );
    }

    return actions;
  },
};
