import Swal from "sweetalert2";

export const sweetalert = () => {
  const success = (titles: string, texts: string) => {
    return Swal.fire({
      title: titles,
      text: texts,
      icon: "success",
      confirmButtonText: "ตกลง",
    });
  };
  const errors = (titles: string, texts: string, detail: string) => {
    return Swal.fire({
      title: titles,
      text: texts,
      icon: "error",
      confirmButtonText: "ตกลง",
      footer: `"<a>${detail}</a>"`,
    });
  };
  return { success, errors };
};
