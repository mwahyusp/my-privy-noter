const getInitialData = () => [
  {
    id: 1,
    title: "React",
    body: "React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "React Element",
    body: "Element merupakan blok terkecil dalam membangun antarmuka di aplikasi React. Seluruh UI yang tampak, merupakan sebuah element. Element dapat berupa paragraph, button, image, dan tipe lainnya.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "React Component",
    body: "Component merupakan sebuah fungsi JavaScript yang mengembalikan React element. Dengan menggunakan component, Anda dapat membuat element yang reusable.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Composition",
    body: "Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "Imperatif Code",
    body: "Penulisan kode yang menjelaskan secara detail langkah demi langkah untuk mencapai tujuan.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: true,
  },
  {
    id: 6,
    title: "Deklaratif Code",
    body: "Penulisan kode yang ringkas dan jelas dengan mendeklarasikan apa yang ingin dicapai tanpa menuliskan langkah demi langkah.",
    createdAt: "2022-08-21T04:27:34.572Z",
    archived: true,
  },
];

const showFormattedDate = (date) => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
