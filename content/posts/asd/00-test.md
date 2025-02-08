+++
title = '00 Test'
date = '2025-02-08T15:49:04+09:00'
draft = false
+++

테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트 테스트테스트테스트테스트테스트테스트테스트테스트

{{< highlight java "hl_lines=8 15-17" >}}
import 'package:flutter/material.dart';

import '/consts.dart';
import '/service/abs_do.dart';
import '/style_var.dart';
import 'sheet.dart';

abstract class SettingMainState<W extends StatefulWidget, GroupDo extends AbsDo, ItemDo extends AbsDo> extends State<W> {
  // group
  final ScrollController _groupScrollController = ScrollController();
  final List<GroupDo> _groupList = [];
  int? _selectedGroupId;

  @override
  void dispose() {
    _itemScrollController.dispose();
    _groupScrollController.dispose();
    super.dispose();
  }

  String get name;

  bool get isGroupTree => true;

  Future<void> _loadItemListInGroup(GroupDo target) async {
    List<ItemDo> list = await loadItemList(target.id!);
    setState(() {
      _selectedGroupId = target.id;
      _itemList.clear();
      _itemList.addAll(list);
    });
  }

  Future<void> _setSelected(ItemDo target) async {
    setState(() {
      _selectedItemId = target.id;
    });
  }
}
{{< / highlight >}}