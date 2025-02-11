+++
date = '2025-02-08T15:49:04+09:00'
languages = ['dart']
frameworks = ['flutter']
title = '00 Test'
draft = true
+++

{{<split>}}
{{<box title="# 제목 레벨1">}}# 제목 레벨1{{</box>}}
{{<box title="## 제목 레벨2">}}## 제목 레벨2{{</box>}}
{{<box title="### 제목 레벨3">}}### 제목 레벨3{{</box>}}
{{</split>}}

{{<split>}}
{{<box title="**굵게**">}}**굵게**{{</box>}}
{{<box title="~~취소선~~">}}~~취소선~~{{</box>}}
{{</split>}}

{{<table/wrap headers="\"이름\",\"버전\"">}}
  {{<table/row cells="\"Spring Boot\",\"3.4.2\"">}}
  {{<table/row cells="\"QueryDsl\",\"5.1.0\"">}}
{{</table/wrap>}}

{{<split>}}
```css{data-line="1-3"}
@media screen {
    div {
        text-decoration: underline;
        background: url('foo.png');
    }
}
```
```css{data-line="4,6"}
@media screen {
    div {
        text-decoration: underline;
        background: url('foo.png');
    }
}
```
{{</split>}}

인라인 코드 <code class="language-java">System.out.println("hello...");</code>

```treeview{.no-line-numbers}
root_folder/
|-- going deeper/
|   |-- going deeper/
|   |   |-- .secret_file
|   |   `-- sample.pptx
|   |-- style.css
|   `-- index.html
|-- .gitignore
|-- .npmignore
|-- archive.zip
|-- logo.svg
`-- README.md
```

> 인용

풋노트[^a]는 숫자로 작성하는데
[^a]: 이렇게 하면 자동으로 아래에 만들어준다.

풋노트[^b]의 위치는 자동으로 내려간다.
[^b]: 숫자는 자동으로 만들어지는듯 하다.

