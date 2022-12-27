package tree

import (
	"errors"
	"sort"
)

// Define the Record type
type Record struct {
	ID     int
	Parent int
}

// Define the Node type
type Node struct {
	ID       int
	Children []*Node
}

func Build(records []Record) (*Node, error) {
	var root *Node
	nodesById := make(map[int]*Node)
	sort.Slice(records, func(i, j int) bool {
		return records[i].ID < records[j].ID
	})

	for i, record := range records {
		if record.ID != i || record.Parent > record.ID || record.ID != 0 && record.ID == record.Parent {
			return root, errors.New("invalid records id")
		}
		node := &Node{ID: record.ID}

		if parent, exists := nodesById[record.Parent]; exists {
			parent.Children = append(parent.Children, node)
		}

		nodesById[node.ID] = node
	}

	return nodesById[0], nil
}
