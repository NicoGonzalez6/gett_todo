import React from 'react';
import { useTable, usePagination, Row } from 'react-table';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { tableI } from './types';

export const Table: React.FC<tableI> = ({ data, columns }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		usePagination
	);
	return (
		<StyledWrapper>
			<table {...getTableProps()} className='fl-table'>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row: Row<object>, i: any) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className='pagination'>
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{'<<'}
				</button>
				<button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					{'<'}
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{'>'}
				</button>
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					{'>>'}
				</button>
				<span>
					Page
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>
				<span>
					| Go to page:
					<input
						type='number'
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(page);
						}}
						style={{ width: '100px' }}
					/>
				</span>
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[5, 10, , 15, 20].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	.fl-table {
		border-radius: 5px;
		font-size: 12px;
		font-weight: normal;
		border: none;
		border-collapse: collapse;
		width: 100%;
		max-width: 100%;
		white-space: nowrap;
		background-color: white;
	}

	.fl-table td,
	.fl-table th {
		text-align: center;
		padding: 8px;
	}

	.fl-table td {
		border-right: 1px solid #f8f8f8;
		font-size: 12px;
	}

	.fl-table thead th {
		color: #ffffff;
		background: ${({ theme }) => theme.colors.primary};
	}

	.fl-table thead th:nth-child(odd) {
		color: #ffffff;
		background: ${({ theme }) => theme.colors.primary};
	}

	.fl-table tr:nth-child(even) {
		background: #f8f8f8;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		.fl-table {
			display: block;
			width: 100%;
		}
		.table-wrapper:before {
			content: 'Scroll horizontally >';
			display: block;
			text-align: right;
			font-size: 11px;
			color: white;
			padding: 0 0 10px;
		}
		.fl-table thead,
		.fl-table tbody,
		.fl-table thead th {
			display: block;
		}
		.fl-table thead th:last-child {
			border-bottom: none;
		}
		.fl-table thead {
			float: left;
		}
		.fl-table tbody {
			width: auto;
			position: relative;
			overflow-x: auto;
		}
		.fl-table td,
		.fl-table th {
			padding: 20px 0.625em 0.625em 0.625em;
			height: 60px;
			vertical-align: middle;
			box-sizing: border-box;
			overflow-x: hidden;
			overflow-y: auto;
			width: 120px;
			font-size: 13px;
			text-overflow: ellipsis;
		}
		.fl-table thead th {
			text-align: left;
			border-bottom: 1px solid #f7f7f9;
		}
		.fl-table tbody tr {
			display: table-cell;
		}
		.fl-table tbody tr:nth-child(odd) {
			background: none;
		}
		.fl-table tr:nth-child(even) {
			background: transparent;
		}
		.fl-table tr td:nth-child(odd) {
			background: #f8f8f8;
			border-right: 1px solid #e6e4e4;
		}
		.fl-table tr td:nth-child(even) {
			border-right: 1px solid #e6e4e4;
		}
		.fl-table tbody td {
			display: block;
			text-align: center;
		}
	}
`;
