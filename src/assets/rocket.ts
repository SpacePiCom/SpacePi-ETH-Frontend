const jsonType = () => {
  const baseUrl =
    import.meta.env.MODE === 'development' ?
      'rocket/'
    : 'https://eth.space-pi.dev/rocket/'
  return {
    v: '5.6.9',
    fr: 30,
    ip: 0,
    op: 8,
    w: 1024,
    h: 974,
    nm: 'spacepi-eth-R',
    ddd: 0,
    assets: [
      {
        id: 'image_0',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_0.png',
        e: 0
      },
      {
        id: 'image_1',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_1.png',
        e: 0
      },
      {
        id: 'image_2',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_2.png',
        e: 0
      },
      {
        id: 'image_3',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_3.png',
        e: 0
      },
      {
        id: 'image_4',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_4.png',
        e: 0
      },
      {
        id: 'image_5',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_5.png',
        e: 0
      },
      {
        id: 'image_6',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_6.png',
        e: 0
      },
      {
        id: 'image_7',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_7.png',
        e: 0
      },
      {
        id: 'image_8',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_8.png',
        e: 0
      },
      {
        id: 'image_9',
        w: 1024,
        h: 974,
        u: baseUrl,
        p: 'img_9.png',
        e: 0
      },
      {
        id: 'comp_0',
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 2,
            nm: 'spacepi-eth_0001_r-1.png',
            cl: 'png',
            refId: 'image_0',
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [512, 487, 0], ix: 2 },
              a: { a: 0, k: [512, 487, 0], ix: 1 },
              s: { a: 0, k: [100, 100, 100], ix: 6 }
            },
            ao: 0,
            ip: 0,
            op: 1,
            st: 0,
            bm: 0
          },
          {
            ddd: 0,
            ind: 2,
            ty: 2,
            nm: 'spacepi-eth_0000_r-2.png',
            cl: 'png',
            refId: 'image_1',
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [512, 487, 0], ix: 2 },
              a: { a: 0, k: [512, 487, 0], ix: 1 },
              s: { a: 0, k: [100, 100, 100], ix: 6 }
            },
            ao: 0,
            ip: 1,
            op: 2,
            st: 1,
            bm: 0
          }
        ]
      }
    ],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 0,
        nm: '4',
        refId: 'comp_0',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        w: 1024,
        h: 974,
        ip: 6,
        op: 8,
        st: 6,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 0,
        nm: '3',
        refId: 'comp_0',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        w: 1024,
        h: 974,
        ip: 4,
        op: 6,
        st: 4,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 0,
        nm: '2',
        refId: 'comp_0',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        w: 1024,
        h: 974,
        ip: 2,
        op: 4,
        st: 2,
        bm: 0
      },
      {
        ddd: 0,
        ind: 4,
        ty: 0,
        nm: '1',
        refId: 'comp_0',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        w: 1024,
        h: 974,
        ip: 0,
        op: 2,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 2,
        nm: 'spacepi-eth_0002_f-8.png',
        cl: 'png',
        refId: 'image_2',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 7,
        op: 8,
        st: 7,
        bm: 0
      },
      {
        ddd: 0,
        ind: 6,
        ty: 2,
        nm: 'spacepi-eth_0003_f-7.png',
        cl: 'png',
        refId: 'image_3',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 6,
        op: 7,
        st: 6,
        bm: 0
      },
      {
        ddd: 0,
        ind: 7,
        ty: 2,
        nm: 'spacepi-eth_0004_f-6.png',
        cl: 'png',
        refId: 'image_4',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 5,
        op: 6,
        st: 5,
        bm: 0
      },
      {
        ddd: 0,
        ind: 8,
        ty: 2,
        nm: 'spacepi-eth_0005_f-5.png',
        cl: 'png',
        refId: 'image_5',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 4,
        op: 5,
        st: 4,
        bm: 0
      },
      {
        ddd: 0,
        ind: 9,
        ty: 2,
        nm: 'spacepi-eth_0006_f-4.png',
        cl: 'png',
        refId: 'image_6',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 3,
        op: 4,
        st: 3,
        bm: 0
      },
      {
        ddd: 0,
        ind: 10,
        ty: 2,
        nm: 'spacepi-eth_0007_f-3.png',
        cl: 'png',
        refId: 'image_7',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 2,
        op: 3,
        st: 2,
        bm: 0
      },
      {
        ddd: 0,
        ind: 11,
        ty: 2,
        nm: 'spacepi-eth_0008_f-2.png',
        cl: 'png',
        refId: 'image_8',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 1,
        op: 2,
        st: 1,
        bm: 0
      },
      {
        ddd: 0,
        ind: 12,
        ty: 2,
        nm: 'spacepi-eth_0009_f-1.png',
        cl: 'png',
        refId: 'image_9',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [512, 487, 0], ix: 2 },
          a: { a: 0, k: [512, 487, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 1,
        st: 0,
        bm: 0
      }
    ],
    markers: []
  }
}

export default jsonType
