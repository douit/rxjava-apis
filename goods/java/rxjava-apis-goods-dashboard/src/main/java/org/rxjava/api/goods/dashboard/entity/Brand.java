package org.rxjava.api.goods.dashboard.entity;

import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Map.Entry;
import java.util.AbstractMap.SimpleImmutableEntry;

@Getter
@Setter
public class Brand {

	private Date createDate;
	private String id;
	private String name;
	private Date updateDate;

	public List<Entry<String, Object>> encode(String $parent, List<Entry<String, Object>> $list) {

		if (createDate != null) {
			$list.add(new SimpleImmutableEntry<>($parent + "createDate", createDate));
		}

		if (id != null) {
			$list.add(new SimpleImmutableEntry<>($parent + "id", id));
		}

		if (name != null) {
			$list.add(new SimpleImmutableEntry<>($parent + "name", name));
		}

		if (updateDate != null) {
			$list.add(new SimpleImmutableEntry<>($parent + "updateDate", updateDate));
		}
		return $list;
	}
}