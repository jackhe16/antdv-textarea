import { defineComponent, ref } from "vue";
import { Input } from "ant-design-vue";

export default defineComponent({
  setup() {
    const inputVal = ref("input");
    const textVal = ref("text");

    return () => {
      return (
        <div>
          <Input value={inputVal.value} />
          <br />
          <Input.TextArea value={textVal.value} />
        </div>
      );
    };
  },
});
