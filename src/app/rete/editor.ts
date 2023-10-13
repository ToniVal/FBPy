import { NodeEditor, GetSchemes, ClassicPreset } from "rete";
type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;
const editor = new NodeEditor<Schemes>();