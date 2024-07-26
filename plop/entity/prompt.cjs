const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// 下划线转大写字母
const underline2Upper = (str) => {
  const Str = toUpperCase(str);
  return str.replace(/_([a-z])/g, (all, i) => {
    return i.toUpperCase();
  });
};
const underline_2_line = (str) => {
  return str.replace(/_([a-z])/g, '-');
};
module.exports = {
  description: 'Create nest Database Entity',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入实体名称下划线格式（如： sys_config）',
    },
  ],
  actions: (data) => {
    const { name } = data;
    const UpName = underline2Upper(name);
    const lineName = underline_2_line(name);

    const actions = [];
    if (name) {
      actions.push(
        {
          type: 'add',
          path: `./src/database/entities/${lineName}.entity.ts`,
          templateFile: './plop/entity/entities.hbs',
          data: {
            name,
            UpName,
          },
        },
        {
          type: 'add',
          path: `./src/database/vos/${lineName}-entity.vo.ts`,
          templateFile: './plop/entity/vo.hbs',
          data: {
            name,
            UpName,
          },
        },
      );
    }

    return actions;
  },
};
