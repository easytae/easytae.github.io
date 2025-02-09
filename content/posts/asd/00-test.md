+++
title = '00 Test'
date = '2025-02-08T15:49:04+09:00'
draft = true
+++

# 제목{#id .className attrName=attrValue}

## 부제목

### 부부제목

**굵게** ~~취소선~~

링크는 자동으로 걸림 www.commonmark.org

| 머리1 |   머리2    | 머리3 |
|:----|:--------:|---:|
|     |   가운데    |
|     |          | 오른쪽 |
| 왼쪽  |

좌우 분할은 커스텀

<div class="split">

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

</div>

인라인 코드는 pre를 제외하고 작성 <code class="language-java">System.out.println("hello...");</code>

폴더구조

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

풋노트[^1]는 숫자로 작성하는데
[^1]: 이렇게 하면 자동으로 아래에 만들어준다.

> 인용은 쉽다
