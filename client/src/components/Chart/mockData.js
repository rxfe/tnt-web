export default {
  'meta': {
    'project': 'X',
    'version': 1.1,
    'baseTime': new Date('2017-06-23'),
    'totalHours': 24,
    'author': 'wangyifeng03',
    'storys': [
      {
        'text': '优化着陆页体验',
        'date': '2017-06-23~'
      },
      {
        'text': '评论支持富文本',
        'date': '2017-06-23~2017-06-25'
      }
    ]
  },
  'storys': [
    {
      'text': '优化着陆页体验',
      'progress': null,
      'tasks': [
        {
          'status': 'done',
          'timing': [
            '1h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null,
          'text': '合并冗余请求'
        },
        {
          'status': 'active',
          'timing': [
            '1h',
            '3h',
            '2d'
          ],
          'isFloat': false,
          'after': null,
          'blame': null,
          'text': '修复非必现白屏 bug'
        },
        {
          'status': 'pending',
          'timing': [
            '2h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null,
          'text': '添加过渡动画'
        },
        {
          'status': 'pending',
          'timing': [
            '1h'
          ],
          'isFloat': true,
          'after': null,
          'blame': null,
          'text': 'Wiki 文档整理'
        }
      ]
    },
    {
      'text': '评论支持富文本',
      'progress': null,
      'tasks': [
        {
          'status': 'pending',
          'timing': [
            '5h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null,
          'text': '编辑器选型调研'
        },
        {
          'status': 'done',
          'timing': [
            '2h'
          ],
          'isFloat': false,
          'after': null,
          'blame': null,
          'text': '样式定制'
        },
        {
          'status': 'pending',
          'timing': [
            '2h',
            '6h',
            '1d'
          ],
          'isFloat': false,
          'after': '后端重构',
          'blame': '旧接口复用性问题',
          'text': '接口联调测试'
        }
      ]
    }
  ]
}
