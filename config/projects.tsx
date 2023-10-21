export interface Project {
  name: string;
  id: string;
  description: string;
  url: string;
  images: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    name: 'V2EX Plus',
    id: 'v2ex-plus',
    description:
      'A V2EX client built with React Native and Typescript and Redux',
    url: 'xyxc0673/v2ex-plus',
    icon: '/projects/v2ex-plus/icon.svg',
    images: [
      '/projects/v2ex-plus/1.png',
      '/projects/v2ex-plus/2.png',
      '/projects/v2ex-plus/3.png',
      '/projects/v2ex-plus/4.png',
      '/projects/v2ex-plus/5.png',
    ],
  },
  {
    name: 'JiZhu Assistant',
    id: 'jizhu-assistant',
    description: 'A Wechat Mini App built with Taro for JLUZH',
    url: 'xyxc0673/jza-taro-redux',
    icon: '/projects/jizhu-assistant/icon.svg',
    images: [
      '/projects/jizhu-assistant/1.png',
      '/projects/jizhu-assistant/2.png',
      '/projects/jizhu-assistant/3.png',
      '/projects/jizhu-assistant/4.png',
      '/projects/jizhu-assistant/5.png',
    ],
  },
];
